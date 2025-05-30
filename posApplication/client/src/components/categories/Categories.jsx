import { useState } from "react";
import { Button, Form, Input, message, Modal } from "antd";

import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form] = Form.useForm();
  const handleOk = () => {
    setIsAddModalOpen(false);
  };
  //valueyi obje halinde döndürüyor
  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "content-type": "application/json; charset=UTF-8" },
      });
      message.success("Kategori başarıyla eklendi");
      form.resetFields();
      setCategories([...categories, values]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ul className="flex gap-4 md:flex-col text-lg">
      {categories.map((item) => (
        <li className="category-item" key={item._id}>
          <span>{item.title}</span>
        </li>
      ))}
      <li
        className="category-item !bg-purple-800 hover:opacity-90"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="md:text-2xl" />
      </li>
      <Modal
        title="Yeni Kategori Ekle"
        open={isAddModalOpen}
        onOk={handleOk}
        onCancel={() => setIsAddModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name={"title"}
            label="Kategori Ekle"
            rules={[
              { required: true, message: "Kategori alanı boş geçilemez!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="flex justify-end mb-0"
            rules={[{ required: true }]}
          >
            <Button type="primary" htmlType="submit">
              Oluştur
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </ul>
  );
};

export default Categories;
