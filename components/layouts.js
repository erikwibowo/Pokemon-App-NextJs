export default function Layouts({ children }) {
    return (
        <div className={"flex w-full min-h-screen overflow-y-hidden bg-emerald-100"}>
            <div className='mx-auto my-4 px-4 w-full md:w-8/12 lg:w-6/12'>
                {children}
            </div>
        </div>
    )
}