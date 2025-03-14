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
import SliderWithStickyLabelDemo from "../ui/slider2"

const chartData = Array.from({ length: 900 }, (_, i) => {
  let durationPerDay
  if (i < 60) {
    durationPerDay = i
  } else {
    durationPerDay = (i - 56) / 4
  }

  const durationPerMonth = durationPerDay * 30

  return {
    duration: durationPerDay,
    awsDuration: (i < 60) ? (durationPerMonth * 60) : (durationPerMonth * 3600),
    azureDuration: (i < 60) ? (durationPerMonth * 60) : (durationPerMonth * 3600),
    googleDuration: (i < 60) ? (durationPerMonth * 60) : (durationPerMonth * 3600),
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
  awsProcessor: 'amd' | 'arm'
  googleTier: 'tier1' | 'tier2'
}

export function DurationsChart({ showFreeTier, awsProcessor, googleTier }: Props) {
  const [requestRange, setRequestRange] = React.useState("1h-10h")
  const [functionSize, setFunctionSize] = React.useState(1024)
  const [maxPrice, setMaxPrice] = React.useState(0)

  const filteredData = chartData.filter((_item, index) => {
    switch (requestRange) {
      case "0h-1h":
        return index >= 0 && index <= 60
      case "1h-10h":
        return index >= 60 && index <= (60 + 36)
      case "10h-50h":
        return index >= (60 + 36) && index <= (60 + 196)
      case "50h-100h":
        return index >= (60 + 196) && index <= (60 + 396)
      default:
        return true
    }
  }).map(elem => {
      const functionSizeInGB = functionSize / 1024

      const awsFullDuration = elem.awsDuration * functionSizeInGB
      const azureFullDuration = elem.azureDuration * functionSizeInGB
      const googleFullDuration = elem.googleDuration * functionSizeInGB
    
      const awsFullPrice = awsProcessor === 'amd' 
        ? elem.awsDuration * 0.0000166667
        : elem.awsDuration * 0.0000133334 
      
        const azureFullPrice = elem.azureDuration * 0.000016
      
      const googleFullPrice = googleTier === 'tier1' 
        ? elem.googleDuration * 0.0000025 
        : elem.googleDuration * 0.0000035

    return {
      duration: elem.duration.toString(),
      awsPrice: (showFreeTier && awsFullDuration <= 400000) ? 0 : awsFullPrice.toFixed(2),
      azurePrice: (showFreeTier && azureFullDuration <= 400000) ? 0 : azureFullPrice.toFixed(2),
      googlePrice: (showFreeTier && googleFullDuration <= 400000) ? 0 : googleFullPrice.toFixed(2)
    }
  }).filter((elem, index) => (+elem.duration !== 0 && index !== 60))

  React.useEffect(() => {
    if (filteredData.length > 0) {
      const maxPriceValue = Math.max(
        ...filteredData.map(d => Math.max(+d.awsPrice, +d.azurePrice, +d.googlePrice))
      )
      setMaxPrice(Math.ceil(maxPriceValue))
    }
  }, [filteredData])  

  return (
    <Card className="relative">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Duration</CardTitle>
          <CardDescription>
            Comparing FaaS pricing based on the number of GB-seconds usage per month
          </CardDescription>
        </div>
        <Select value={requestRange} onValueChange={setRequestRange}>
          <SelectTrigger
            className="w-[180px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select request range" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="0h-1h" className="rounded-lg">
              0h - 1h exec. per day
            </SelectItem>
            <SelectItem value="1h-10h" className="rounded-lg">
              1h - 10h exec. per day
            </SelectItem>
            <SelectItem value="10h-50h" className="rounded-lg">
              10h - 50h exec. per day
            </SelectItem>
            <SelectItem value="50h-100h" className="rounded-lg">
              50h - 100h exec. per day
            </SelectItem>
          </SelectContent>
        </Select>
        <div className='absolute right-[15rem] top-[1.05rem] w-[300px] h-[50px] flex align-center px-5 rounded-md bg-[#000]'>
            <div className="w-full flex items-center justify-start gap-3">
              <span className="text-sm text-muted-foreground">128MB</span>
              <SliderWithStickyLabelDemo
                badgeFormatter={(a: number) => a >= 1024 ? `${(a / 1024).toFixed(2)}GB` : `${a}MB`}
                defaultValue={1024}
                maxValue={2050}
                minValue={0}
                showBadge={true}
                updateValue={(a: number) => setFunctionSize(a)}
              />
              <span className="text-sm text-muted-foreground">2GB</span>
            </div>
          </div>
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
              dataKey="duration"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                if (requestRange === '0h-1h') {
                  return `${value}m`
                }
                return `${value}h`
              }}
            />
            <YAxis
              domain={[0, maxPrice]}
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
                    if (requestRange === '0h-1h') {
                      return `${value} minutes each day`
                    }
                    return `${(value)} hours each day`
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
