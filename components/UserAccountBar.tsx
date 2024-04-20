import { Fragment } from "react";
import Image from "next/image";
import {
    Button,
  FormControl,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { PhoneIcon, LockIcon } from "@chakra-ui/icons";
import { LuEye,LuEyeOff } from "react-icons/lu";

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
    
    const {isOpen,onToggle} =useDisclosure()
  return (
    <Formik
      initialValues={{ phone: "", password: "" }}
      validationSchema={Yup.object().shape({
        phone: Yup.string().required(),
        password: Yup.string().required(),
      })}
      onSubmit={(values) => {
        
      }}
    >
      {({ values, touched, errors }) => (
        <Form noValidate>
          <HStack spacing={0}>
            <FormControl            
              width="100%"
              isRequired
              isInvalid={touched?.phone && !!errors?.phone}
              
            >
              <InputGroup>
                <InputLeftElement                  
                >                    
                  <PhoneIcon color={"black"} fontSize={"small"} mb="2"  alignContent={"center"} justifySelf={"center"} alignSelf={"center"} />
                </InputLeftElement>
                <Field
                  size="sm"
                  name="phone"
                  as={Input}
                  type="tel"
                  placeholder="Mobile"
                  pl="8"                  
                />
              </InputGroup>              
            </FormControl>
            <FormControl
              width="90%"
              isRequired
              isInvalid={touched?.phone && !!errors?.phone}              
            >
              <InputGroup >
                <InputLeftElement>
                  <LockIcon mb="2" />
                </InputLeftElement>
                <Field size="sm" name="password" as={Input} type={"password"} pl="8" />
                <InputRightElement onClick={onToggle} borderRadius={"0"}>
                <Icon as={isOpen ? LuEye : LuEyeOff } mb="2" borderRadius={"0"} />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl>
                <Button size={"sm"} backgroundColor={"#613cea"} color={"white"} type="submit" width={"60%"} borderRadius={"0"} isLoading={false} loadingText="Verifying">Login</Button>
            </FormControl>
          </HStack>
        </Form>
      )}
    </Formik>
  );
};
