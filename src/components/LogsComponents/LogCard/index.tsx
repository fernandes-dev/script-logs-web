import {ILogItem} from "@/app/dashboard/home/page";

interface Props {
  logItem: ILogItem
}

function customTypeColor(type: 'warn' | 'error' | 'info', bg = true) {
  const options = {
    error: `text-red-500 ${bg ? 'bg-red-100' : ''}`,
    warn: `text-orange-500 ${bg ? 'bg-orange-100':  ''}`,
    info: `text-blue-500 ${bg ? 'bg-blue-100' : ''}`,
  }

  return options[type]
}

export default function LogCard({logItem}: Props) {
  return <div className="w-full border rounded-md p-4 bg-white flex justify-between">
    <div className="w-1/6 font-bold">
      <span className={`${customTypeColor(logItem.type, false)} pr-2`}>|</span>
      <span>{logItem.app_name}</span>
    </div>

    <div className="w-1/2 truncate hover:text-clip">{logItem.message}</div>

    <div className={`w-1/6 px-8`}>
      <div className={`${customTypeColor(logItem.type)} py-1 text-center font-bold text-sm rounded-md w-full`}>{logItem.type}</div>
    </div>

    <div className="w-1/4">{logItem.timestamp}</div>
  </div>
}