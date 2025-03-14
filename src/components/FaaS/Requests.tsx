import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

const chartData = Array.from({ length: 810 }, (_, i) => {
  let requests
  if (i < 10) {
    requests = i * 100000
  } else {
    requests = (i - 9) * 1000000
  }
  
  const awsPrice = requests <= 1000000 ? 0 : (requests * 0.20) / 1000000
  const azurePrice = requests <= 1000000 ? 0 : (requests * 0.20) / 1000000
  const googlePrice = requests <= 2000000 ? 0 : (requests * 0.40) / 1000000

  return {
    requests,
    awsPrice,
    azurePrice,
    googlePrice,
  }
})

const chartConfig = {
  awsPrice: {
    label: "Aws Lambda",
    color: "hsl(var(--chart-3))", 
  },
  azurePrice: {
    label: "Azure Functions",
    color: "hsl(var(--chart-5))", 
  },
  googlePrice: {
    label: "Google Cloud Functions",
    color: "hsl(var(--chart-2))", 
  }
} satisfies ChartConfig

type Props = {
  showFreeTier: boolean
}

export function RequestsChart({ showFreeTier }: Props) {
  const [requestRange, setRequestRange] = React.useState("1M-10M")

  const filteredData = chartData.filter((item) => {
    switch (requestRange) {
      case "0M-1M":
        return +item.requests >= 0 && +item.requests <= 1000000 
      case "1M-10M":
        return +item.requests > 1000000 && +item.requests <= 10000000 
      case "10M-50M":
        return +item.requests > 10000000 && +item.requests <= 50000000 
      case "50M-100M":
        return +item.requests > 50000000 && +item.requests <= 100000000 
      default:
        return true 
    }
  }).map(elem => {
  
    const awsPrice = (showFreeTier && elem.requests <= 1000000) ? 0 : (elem.requests * 0.20) / 1000000
    const azurePrice = (showFreeTier && elem.requests <= 1000000) ? 0 : (elem.requests * 0.20) / 1000000
    const googlePrice = (showFreeTier && elem.requests <= 2000000) ? 0 : (elem.requests * 0.40) / 1000000

    return {
      requests: elem.requests.toString(),
      awsPrice,
      azurePrice,
      googlePrice,
    }
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Requests</CardTitle>
          <CardDescription>
            Comparing FaaS pricing based on the number of requests per month
          </CardDescription>
        </div>
        <Select value={requestRange} onValueChange={setRequestRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select request range" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="0M-1M" className="rounded-lg">
              0M - 1M requests
            </SelectItem>
            <SelectItem value="1M-10M" className="rounded-lg">
              1M - 10M requests
            </SelectItem>
            <SelectItem value="10M-50M" className="rounded-lg">
              10M - 50M requests
            </SelectItem>
            <SelectItem value="50M-100M" className="rounded-lg">
              50M - 100M requests
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              {/* Gradient for AWS Lambda */}
              <linearGradient id="fillLambda" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-awsPrice)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-awsPrice)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              {/* Gradient for Azure Functions */}
              <linearGradient id="fillAzure" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-azurePrice)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-azurePrice)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              {/* Gradient for Google Cloud Functions */}
              <linearGradient id="fillGoogle" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-googlePrice)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-googlePrice)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="requests"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                if (value < 1000000) {
                  return `${value / 1000}K`
                }
                return `${value / 1000000}M`
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => {
                return `$${value.toFixed(2)}`
              }}
            />
            <ChartTooltip
              cursor={false}
              labelClassName="w-[200px]"
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    if (value < 1000000) {
                      return `${value / 1000}K requests [${((value / 720) / 1000).toFixed(1)}K per hour]`
                    }
                    return `${value / 1000000}M requests [${((value / 720) / 1000).toFixed(1)}K per hour]`
                  }}
                  indicator="dot"
                />
              }
            />
            {/* Area for AWS Lambda */}
            <Area
              dataKey="awsPrice"
              type="natural"
              fill="url(#fillLambda)"
              stroke="var(--color-awsPrice)"
            />
            {/* Area for Azure Functions */}
            <Area
              dataKey="azurePrice"
              type="natural"
              fill="url(#fillAzure)"
              stroke="var(--color-azurePrice)"
            />
            {/* Area for Google Cloud Functions */}
            <Area
              dataKey="googlePrice"
              type="natural"
              fill="url(#fillGoogle)"
              stroke="var(--color-googlePrice)"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
