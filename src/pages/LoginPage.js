import React from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardImg
} from "reactstrap";
import { GoogleLoginButton } from "react-social-login-buttons";

export const  LoginPage = ()=> (
  <div className="background">
    <div className="login-box">
      <div className="container">
        <div class="row app-des">
          <div class="col left-background ">
            <h2>LOGIN</h2>
            <p>Powered by Vasmai</p>
            
          </div>
          <div class="col login-form" >
            <form >
              <h2 className="font-weight-bold mb-4">Customer Login</h2>
              <FormGroup>
                <Label className="font-weight-bold mb-2">Email</Label> <br/><br/>
                <Input
                  className="mb-3"
                  type="email"
                  placeholder="John@example.com" /><br/>
                <Label className="font-weight-bold mb-2">Password</Label><br/><br/>
                <Input
                  className="mb-3"
                  type="password"
                  placeholder="At least 8 characters" />
              </FormGroup>
              <Button className="mt-3  btn">Login to your account</Button><br/><br/>
              {/* <div className="text-center m-4">or continue with social account</div>
      <GoogleLoginButton className="mt-3 mb-3 px-auto text-center"/> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)


