export default function Card({ children }) {
    return (
        <div className="w-full bg-white shadow rounded-lg cursor-pointer hover:bg-gray-100">
            {children}
        </div>
    )
}