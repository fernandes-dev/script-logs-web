import LogCard from "@/components/LogsComponents/LogCard";
import {ILogItem} from "@/app/dashboard/home/page";

interface Props {
  logs: ILogItem[]
}

export default function LogsList({logs}: Props) {
  return <main>
    {logs.map(log => {
      return <div key={log.id} className="mb-2">
        <LogCard logItem={log}/>
      </div>
    })}
  </main>
}