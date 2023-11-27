const Sertifikasi = () => {
  const data = [
    {
      name: "Cisco Certified Network Associate",
      tanggal: "22 Agustus 2023",
      lembaga: "Cisco Systems",
    },
    {
      name: "Cisco Certified Internetwork Expert",
      tanggal: "22 Agustus 2023",
      lembaga: "Cisco Systems",
    },
    {
      name: "Red Hat Certified Engineer",
      tanggal: "22 Agustus 2023",
      lembaga: "Red Hat",
    },
    {
      name: "Microsoft Certified Technology Specialist",
      tanggal: "22 Agustus 2023",
      lembaga: "Microsoft",
    },
  ];
  return (
    <>
      <div className="mt-10 ">
        <div className="w-10/12 mx-auto">
          <div className="text-xl font-bold text-cust-primary450">
            Sertifikasi Profesional
          </div>
          <div className="w-full my-6 overflow-auto">
            <table className="sm:w-full w-[600px]">
              <thead className="bg-cust-primary350 text-white">
                <tr>
                  <th className="py-3 px-20">Nama Sertifikasi</th>
                  <th className="px-20">Tanggal Terbit</th>
                  <th className="px-20">Lembaga</th>
                  <th className="px-20">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((winner, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 == 0 ? "bg-cust-primary150" : ""} `}
                  >
                    <td className="text-center py-3 font-bold">
                      {winner.name}
                    </td>
                    <td className="text-center">{winner.tanggal}</td>
                    <td className="text-center font-bold">{winner.lembaga}</td>
                    <td className="text-center font-bold text-green-500">
                      Aktif
                    </td>
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

export default Sertifikasi;
