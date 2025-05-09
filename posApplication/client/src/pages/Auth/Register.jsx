import { Button, Carousel, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import AuthCarousel from "../../components/auth/AuthCarousel";

const Register = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              label="Kullanıcı Adı:"
              name={"username"}
              rules={[
                { required: true, message: "Kullanıcı Adı Boş Bırakılamaz!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="E-Mail:"
              name={"email"}
              rules={[{ required: true, message: "E-Mail Boş Bırakılamaz!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Şifre:"
              name={"password"}
              rules={[{ required: true, message: "Şifre Boş Bırakılamaz!" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Şifre Tekrar:"
              name={"passwordAgain"}
              dependencies={["password"]}
              rules={[
                { required: true, message: "Şifre Tekrar Boş Bırakılamaz!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "Şifreler aynı olmalı!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              >
                Kaydol
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Bir hesabınız mı var mı? &nbsp;
            <Link className="text-blue-600" to="/login">
              Şimdi giriş yap
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
              <Carousel className="!h-full px-6" autoplay>
                <AuthCarousel
                  img="/images/responsive.svg"
                  title="Responsive"
                  desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                />
                <AuthCarousel
                  img="/images/statistic.svg"
                  title="İstatistikler"
                  desc="Geniş Tutulan İstatistikler"
                />
                <AuthCarousel
                  img="/images/customer.svg"
                  title="Müşteri Memnuniyeti"
                  desc="Deneyim Sonunda Üründen Memnun Müşteriler"
                />
                <AuthCarousel
                  img="/images/admin.svg"
                  title="Yönetici Paneli"
                  desc="Tek Yerden Yönetim"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
