import { Form, Input, Modal, Select } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
        <Form layout={"vertical"}>
            <Form.Item label="Müşteri Adı" rules={[{required:true}]}>               
                <Input placeholder="Bir Müşteri Adı Yazınız"/>
            </Form.Item>
            <Form.Item label="Telefon Numarası" rules={[{required:true}]}>               
                <Input placeholder="Bir Telefon Numarası Giriniz"/>
            </Form.Item>
            <Form.Item label="Ödeme Yöntemi" rules={[{required:true}]}>               
                <Select placeholder="Bir Ödeme Yöntemi Seçiniz">
                    <Select.Option value="Nakit">Nakit</Select.Option>
                    <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>

                </Select>
            </Form.Item>
        </Form>
    </Modal>
  );
};

export default CreateBill;
