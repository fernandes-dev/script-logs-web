import SearchIconSVG from "@/svgs/SearchIconSVG";
import {ChangeEvent} from "react";

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function InputSearch({onChange}: Props) {
  return <div>
    <label className="relative block">
        <span className="absolute inset-y-6 left-0 flex items-center pl-3">
          <SearchIconSVG/>
        </span>
    </label>

    <input className="w-full h-12 focus:outline-none rounded-md border-slate-300 py-2 pl-12 pr-4" type="search"
           placeholder="filtrar" autoComplete="off"
           onChange={onChange}
    />
  </div>
}