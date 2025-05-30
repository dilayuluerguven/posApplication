import { Button, Modal } from "antd";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Fatura Yazdır"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      width={800}
    >
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-auto">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
            </div>
            <div className="bill-details">
              <div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Fatura Detayı :</p>
                  <p>Unwrapped</p>
                  <p> Fake Street 123</p>
                  <p> San Javier </p>
                  <p> CA 1234</p>
                </div>
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Fatura:</p>
                  The Boring Company
                  <p> Tesla Street 007</p>
                  <p> Frisco </p>
                  <p> CA 0000</p>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700">Fatura numarası:</p>
                    <p>00041</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">
                      Veriliş Tarihi:
                    </p>
                    <p>2022-11-21</p>
                  </div>
                </div>
                <div className="text-md text-slate-500 sm:block hidden">
                  <div>
                    <p className="font-bold text-slate-700 ">Şartlar:</p>
                    <p>10 gün</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">Vade:</p>
                    <p>2023-06-15</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell  "
                    >
                      Görsel
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell  "
                    >
                      Başlık
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell  "
                    >
                      Fiyat
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell  "
                    >
                      Adet
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell  "
                    >
                      Toplam
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 pr-3 ">
                      <img
                        src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                        alt=""
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="py-4 pr-3 ">
                        <span className="font-medium">Elma</span>
                    </td>
                    <td className="py-4 pr-3 text-center">
                        <span>5₺</span>
                    </td>
                    <td className="py-4 pr-3 text-center">
                        <span>1</span>
                    </td>
                    <td className="py-4 pr-3 text-end">
                        <span>5.00₺</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th className="text-right pt-6" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">
                        Ara Toplam
                      </span>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">61₺</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="text-right pt-4" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">KDV</span>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-red-600">+4.88₺</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="text-right pt-4" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">Total</span>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">65.88₺</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9 border-slate-200">
                  <p className="text-sm font-light text-slate-700">
                    Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                    Ödenmesi Yasası 0000'e göre, serbest çalışanların bu süreden
                    sonra borçların ödenmemesi durumunda 00.00 gecikme ücreti
                    talep etme hakkına sahip olduklarını ve bu noktada bu ücrete
                    ek olarak yeni bir fatura sunulacağını lütfen unutmayın.
                    Revize faturanın 14 gün içinde ödenmemesi durumunda, vadesi
                    geçmiş hesaba ek faiz ve %8 yasal oran artı %0,5 Bank of
                    England tabanı olmak üzere toplam %8,5 uygulanacaktır.
                    Taraflar Kanun hükümleri dışında sözleşme yapamazlar.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="flex justify-end mt-4">
        <Button type="primary" size="large">Yazdır</Button>
      </div>
    </Modal>
  );
};

export default PrintBill;
