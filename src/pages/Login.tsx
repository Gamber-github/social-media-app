import { Layout } from "antd"
import Checkbox from "antd/es/checkbox/Checkbox"

import { Button } from "../components/ui/Button/Button"
import { Input } from "../components/ui/Input/Input"
import { LoginInput } from "../components/ui/Input/LoginInput"
import { PasswordInput } from "../components/ui/Input/PasswordInput"
import { Header } from "../components/ui/Typography/Header"
// import { TextArea } from "../components/ui/Input/TextArea"

const { Header, Footer, Sider, Content } = Layout

function Login() {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider />
        <Content>
          <Header level={3}>Login</Header>
          <LoginInput size="large" />
          <PasswordInput placeholder="Password" size="large" />
          <Button>Login</Button>
          <Checkbox></Checkbox>
          {/* <TextArea
            maxLength={200}
            style={{ height: 200, marginBottom: 24 }}
            placeholder="Maximum size is 200 characters"
          /> */}
          <Input />
        </Content>
        <Sider />
      </Layout>
      <Footer />
    </Layout>
  )
}

export default Login
