export default function App25jun_listItems() {
  const datas = [1, 2, 3, 4, 5];
  return (
    <>
      <div>
        List Items
        <div>
          {datas.map((data) => (
            <p>{data}</p>
          ))}
        </div>
      </div>
    </>
  );
}
