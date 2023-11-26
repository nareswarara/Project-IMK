const Prestasi = () => {
  const data = [
    {
      name: "Google Solution Challenge",
      winner: "Top 10",
      scale: "Nasional",
    },
    {
      name: "Capture The Flag Hology 6.0",
      winner: "Juara 3",
      scale: "Nasional",
    },
    {
      name: "Google Solution Challenge",
      winner: "Top 10",
      scale: "Nasional",
    },
    {
      name: "Capture The Flag Hology 6.0",
      winner: "Juara 3",
      scale: "Nasional",
    },
  ];
  return (
    <>
      <div className="mt-10 ">
        <div className="w-10/12 mx-auto">
          <div className="text-xl font-bold text-cust-primary450">Prestasi</div>
          <div className="w-full my-6 overflow-auto">
            <table className="sm:w-full w-[600px]">
              <thead className="bg-cust-primary350 text-white">
                <tr>
                  <th className="py-3">Nama Kejuaraan</th>
                  <th>Juara</th>
                  <th>Skala Kejuaraan</th>
                </tr>
              </thead>
              <tbody>
                {data.map((winner, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 == 0 ? "bg-cust-primary150" : ""} `}
                  >
                    <td className="text-center py-3">{winner.name}</td>
                    <td className="text-center">{winner.winner}</td>
                    <td className="text-center">{winner.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prestasi;
