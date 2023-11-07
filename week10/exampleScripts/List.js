function List({ data = [], renderItem, renderEmpty }) {
    return !data.length ? (renderEmpty ) : (
        <ul>
        {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
        ))}
        </ul>
    );
}
export default function App() 
{
    return (
        <List
            data={tahoe_peaks}
            renderEmpty={<p>This list is empty</p>}
            renderItem={item => (
            <>
                {item.name} - {item.elevation.toLocaleString()}ft
            </>
            )}
        />
    );
}