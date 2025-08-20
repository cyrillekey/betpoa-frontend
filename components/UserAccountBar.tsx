import { Fragment } from "react";
import Image from "next/image";
import {
  HStack,
  useDisclosure,
  Field as FormControl,
  InputGroup,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { LuEye, LuEyeOff } from "react-icons/lu";
import { BiLock } from "react-icons/bi";
import { useSignInMutation } from "@/hooks/mutations";
import { toaster } from "./ui/toaster";

const UserAccountBar = () => {
  return (
    <Fragment>
      <UserLoginBar />
    </Fragment>
  );
};
export default UserAccountBar;

const UserLoggedinBar = () => {
  return (
    <Fragment>
      <div className="nav__top__item notifications">
        <a>
          <svg width="24" height="24" viewBox="0 0 24 24">
            {" "}
            <path d="M11.5,22C11.64,22 11.77,22 11.9,21.96C12.55,21.82 13.09,21.38 13.34,20.78C13.44,20.54 13.5,20.27 13.5,20H9.5A2,2 0 0,0 11.5,22M18,10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18L18,16M19.97,10H21.97C21.82,6.79 20.24,3.97 17.85,2.15L16.42,3.58C18.46,5 19.82,7.35 19.97,10M6.58,3.58L5.15,2.15C2.76,3.97 1.18,6.79 1,10H3C3.18,7.35 4.54,5 6.58,3.58Z" />{" "}
          </svg>
          <span className="sr-only">Notifications</span>
        </a>
      </div>
      <div className="nav__top__item user">
        <div className="user__profile-picture">
          <Image
            alt="Linette Simmons"
            src={{
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ",
              width: 100,
              height: 100,
            }}
          />
        </div>
        <div className="user__info">
          <p className="user__name">Linette Simmons</p>
          <div className="user__balance">
            <p className="user__balance__dollars">1 823.23$</p>
            <p className="user__balance__currency">6 385 PLN</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const UserLoginBar = () => {
  const { open, onToggle } = useDisclosure();
  const { isPending, mutateAsync: signIn } = useSignInMutation();

  return (
    <Formik
      initialValues={{ phone: "", password: "" }}
      validationSchema={Yup.object().shape({
        phone: Yup.string().required(),
        password: Yup.string().required().min(6),
      })}
      onSubmit={(values) =>
        signIn({ email: values.phone, password: values.phone }).then((resp) => {
          if (resp?.success) {
          } else {
            toaster.create({
              title: "Error",
              type: "error",
              description: resp?.message,
              closable: true
            });
          }
        })
      }
    >
      {({ values, touched, errors }) => (
        <Form noValidate>
          <HStack gap={1}>
            <FormControl.Root
              required
              disabled={isPending}
              invalid={touched.phone && !!errors.phone}
            >
              <Field
                as={Input}
                name="phone"
                size="xs"
                placeholder="Email/Phone"
              />
            </FormControl.Root>
            <FormControl.Root
              required
              invalid={touched.password && !!errors.password}
              disabled={isPending}
            >
              <InputGroup
                endElementProps={{ onClick: onToggle }}
                endElement={open ? <LuEyeOff /> : <LuEye />}
              >
                <Field
                  as={Input}
                  name="password"
                  size="xs"
                  type={open ? "text" : "password"}
                  placeholder="********"
                />
              </InputGroup>
            </FormControl.Root>
            <Box w="0.5" />
            <Button size={"xs"} type="submit" loading={isPending}>
              Login
            </Button>
            <Box w="2" />
          </HStack>
        </Form>
      )}
    </Formik>
  );
};
