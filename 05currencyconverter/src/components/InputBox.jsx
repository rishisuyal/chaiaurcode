const InputBox = ({
    label="label",
    onCurrencyChange,
    onAmountChnage,
    options=["USD"],
    selected="USD",
    disabled=false,
    ammount
})=>{
    return (
            <div className="bg-white flex justify-between p-3 rounded-lg">
                <div className="w-1/2 overflow-hidden">
                    <label className="text-black/40 mb-2 inline-block">{label}</label>
                    <input min={0} value={ammount} disabled={disabled} onChange={(e)=>onAmountChnage?.(Number(e.target.value))} className="w-full  outline-none py-3 bg-transparent" placeholder="Ammount" type="number" />
                </div>
                <div className="flex flex-wrap justify-end text-right">
                <label className="text-black/40 mb-2 w-full  block">Currency Type</label>
                    <select value={selected} onChange={(e)=>onCurrencyChange?.(e.target.value)} className="rounded-lg px-3 py-3 bg-gray-100 cursor-pointer outline-none">
                        {
                            options.map((val)=>(
                                <option key={val} value={val}>{val}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
    )
}
export default InputBox