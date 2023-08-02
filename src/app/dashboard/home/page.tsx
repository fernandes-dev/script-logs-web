"use client"

import InputSearch from "@/components/InputSearch";
import LogsList from "@/components/LogsComponents/LogsList";

export interface ILogItem {
  id: string
  app_name: string
  message: string
  timestamp: Date | string
  type: 'error' | 'warn' | 'info'
}

const logs: ILogItem[] = [
  {
    id: '1',
    app_name: 'application one',
    message: 'log message test log message test log message test log message test log message test ',
    timestamp: '2023-08-02T03:16:23.725Z',
    type: 'error'
  },
  {
    id: '2',
    app_name: 'application two',
    message: 'log message test log message test log message test log message test log message test ',
    timestamp: '2023-08-02T03:16:23.725Z',
    type: 'info'
  },
  {
    id: '3',
    app_name: 'application three',
    message: 'log message test log message test log message test log message test log message test ',
    timestamp: '2023-08-02T03:16:23.725Z',
    type: 'warn'
  },
]

export default function Dashboard() {
  function handleSearchLogs(text = '') {
    console.log(text)
  }

  return <main>
    <div className="container mx-auto">
      <div>
        <InputSearch onChange={e => handleSearchLogs(e.target.value)}/>
      </div>
      <div className="pt-8">
        <LogsList logs={logs}/>
      </div>
    </div>
  </main>
}