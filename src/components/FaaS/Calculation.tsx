import * as React from "react"
import { Bar, BarChart, LabelList, XAxis } from "recharts"

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
} from "../ui/chart"

import SliderWithStickyLabelDemo from "../ui/slider2"

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  aws: {
    label: "Aws Lambda",
    color: "hsl(var(--chart-3))",
  },
  azure: {
    label: "Azure Functions",
    color: "hsl(var(--chart-1))",
  },
  google: {
    label: "Google Cloud Functions",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

type Props = {
  awsProcessor: 'amd' | 'arm'
  googleTier: 'tier1' | 'tier2'
}

export function CalculationBars({ awsProcessor, googleTier }: Props) {

    const [size, setSize] = React.useState(128)    
    const [requests, setRequests] = React.useState(0)    
    const [duration, setDuration] = React.useState(0)    

    const filteredData = () => {

        const awsPrice = awsProcessor === 'amd'
          ? (requests * duration * (size / 1024)) * 0.0000166667 + (requests * 0.20) / 1000000 // AMDx86
          : (requests * duration * (size / 1024)) * 0.0000133334 + (requests * 0.20) / 1000000 // ARM64

        const azurePrice = (requests * duration * (size / 1024)) * 0.000016 + (requests * 0.20) / 1000000

        const googlePrice = googleTier === 'tier1' 
          ? (requests * duration * (size / 1024)) * 0.0000025 + (requests * 0.40) / 1000000
          : (requests * duration * (size / 1024)) * 0.0000035 + (requests * 0.40) / 1000000

        return [
            { browser: 'aws', visitors: awsPrice, fill: 'var(--color-aws)' },
            { browser: 'azure', visitors: azurePrice, fill: 'var(--color-azure)' },
            { browser: 'google', visitors: googlePrice, fill: 'var(--color-google)' }
        ]
    }

  return (
    <Card className="h-[700px]">
      <CardHeader className="sm:text-left">
        <CardTitle className="flex justify-between w-full">
          Calculator
          <div>
            <p>{(((requests * duration) / 30) / 3600).toFixed(2)} hours exec. per day</p>
          </div>
        </CardTitle>
        <CardDescription>Calculating monthly total charges for FaaS services</CardDescription>
        
        <div className="flex align-center justify-center gap-10 pt-10 z-10">
            <div>
                <p className="flex gap-3">
                    Memory asigned
                    <span className="font-mono">
                        [{size >= 1024 ? `${(size / 1024).toFixed(2)}GB` : `${size}MB`}]
                    </span>
                </p>
                <div className='w-[300px] h-[50px] flex align-center px-5 rounded-md bg-[#000]'>
                    <div className="w-full flex items-center justify-start gap-3">
                        <span className="text-sm text-muted-foreground">128MB</span>
                        <SliderWithStickyLabelDemo
                            badgeFormatter={(a: number) => a >= 1024 ? `${(a / 1024).toFixed(2)}GB` : `${a}MB`}
                            defaultValue={1024}
                            maxValue={2050}
                            minValue={128}
                            showBadge={false}
                            updateValue={(a: number) => setSize(a)}
                        />
                        <span className="text-sm text-muted-foreground">2GB</span>
                    </div>
                </div>
            </div>
            <div>
                <p className="flex gap-3">
                    Requests per month
                    <span className="font-mono">
                        [{requests >= 1000000 ? `${(requests / 1000000).toFixed(2)}M` : `${(requests / 1000).toFixed(2)}K`}]
                    </span>
                </p>
                <div className='w-[300px] h-[50px] flex align-center px-5 rounded-md bg-[#000]'>
                    <div className="w-full flex items-center justify-start gap-3">
                        <span className="text-sm text-muted-foreground">0</span>
                        <SliderWithStickyLabelDemo
                            badgeFormatter={(a: number) => a >= 1000000 ? `${(a / 1000000).toFixed(2)}M` : `${(a / 1000).toFixed(2)}K`}
                            defaultValue={1000000}
                            maxValue={10000000}
                            minValue={0}
                            showBadge={false}
                            updateValue={(a: number) => setRequests(a)}
                        />
                        <span className="text-sm text-muted-foreground">10M</span>
                    </div>
                </div>
            </div>
            <div>
                <p className="flex gap-3">
                    Duration per request
                    <span className="font-mono">
                        [{duration >= 60 ? `${(duration / 60).toFixed(0)}min` : `${duration}sec`}]
                    </span>
                </p>
                <div className='w-[300px] h-[50px] flex align-center px-5 rounded-md bg-[#000]'>
                    <div className="w-full flex items-center justify-start gap-3">
                        <span className="text-sm text-muted-foreground">0</span>
                        <SliderWithStickyLabelDemo
                            badgeFormatter={(a: number) => a >= 60 ? `${(a / 60).toFixed(0)}min` : `${a}sec`}
                            defaultValue={5}
                            maxValue={60}
                            minValue={0}
                            showBadge={false}
                            updateValue={(a: number) => setDuration(a)}
                        />
                        <span className="text-sm text-muted-foreground">60s</span>
                    </div>
                </div>
            </div>
        </div>
      </CardHeader>
      <CardContent className="relative -top-20">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={filteredData()}
            layout="horizontal"
            className="relative left-2 scale-90 !h-[35rem]"
            margin={{
              left: 0,
            }}
          >
            <XAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              tick={{
                fill: "white", 
                fontSize: 18, 
                fontWeight: "bold"
              }}
              domain={[0, 100]}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <Bar
                dataKey="visitors"
                layout="horizontal"
                radius={4}
            >
                <LabelList
                    dataKey="visitors"
                    position="insideLeft"
                    offset={8}
                    className="fill-[#0f0f0f] text-2xl font-bold font-mono"
                    fontSize={12}
                    formatter={(e: any) => `USD ${Number(e).toFixed(2)}`}
                />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
