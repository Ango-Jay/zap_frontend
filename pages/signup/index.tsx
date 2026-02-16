import { SIGN_UP_USER } from "@/api/auth";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { PasswordInput } from "@/components/Forms/PasswordInput";
import { TextInput } from "@/components/Forms/TextInput";
import PasswordCriteria, { getPasswordValidations } from "@/components/utils/PasswordCriteria";
import { toggleHideSideBar } from "@/store/appSlice";
import { useAppDispatch } from "@/store/hooks";
import { emailRegex } from "@/utils/constants";
import { useMutation } from "@tanstack/react-query";
import { Formik, Form } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import * as yup from "yup";

export default function Signup() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  useLayoutEffect(() => {
    dispatch(toggleHideSideBar(true));
  }, []);
  const {mutateAsync, isPending} = useMutation({
    mutationFn: SIGN_UP_USER
  });
  return (
    <div className="w-full min-h-screen flex justify-center pt-10">
      <div className="flex flex-col grow-0 w-full max-w-lg h-fit shadow-sm border border-[#085BA7]/10 rounded-xl p-6 sm:p-10">
        <h2 className="text-3xl font-semibold text-black text-center">
          Sign up
        </h2>
        <div className="w-full mt-6">
          <button className="relative flex items-center justify-center w-full rounded-xl border border-stroke border-solid  py-3 px-4 lg:hover:bg-primary-light/30">
            <Image
              src={"/icons/google.svg"}
              width={20}
              height={20}
              className="absolute top-4 left-4"
              alt=""
            />
            <p>Sign up with Google</p>
          </button>
        </div>
        <div className="w-full flex justify-center py-2 my-4 relative">
          <p className="w-fit px-2 text-sm text-gray text-center text-black font-medium bg-white relative z-[1]">
            OR
          </p>
          <div className="absolute top-[50%] w-full border-t border-t-stroke " />
        </div>
        <div className="w-full">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              try {
                await mutateAsync(values);
                router.push("/login");
              } catch {
                
              }
            }}
          >
            {({ values, errors, touched }) => {
              const passwordValue = values.password;
              const { passwordIsValid } = getPasswordValidations(passwordValue);
              const isSubmitButtonDisabled =  !passwordIsValid;
              return (
                <Form className="w-full flex flex-col gap-4">
                  <div className="w-full flex flex-col sm:flex-row gap-4">
                    <div>
                      <TextInput
                        name="firstName"
                        labelText="First name"
                        placeholder="Enter first name"
                        isError={!!errors.firstName && !!touched.firstName}
                      />
                    </div>
                    <div>
                      <TextInput
                        name="lastName"
                        labelText="Last name"
                        placeholder="Enter last name"
                        isError={!!errors.lastName && !!touched.lastName}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <TextInput
                      name="email"
                      labelText="Email"
                      placeholder="Enter email"
                      isError={!!errors.email && !!touched.email}
                    />
                  </div>
                  <div className="w-full">
                    <PasswordInput
                      name="password"
                      labelText="Password"
                      placeholder="Enter password"
                      isError={!!errors.password && !!touched.password}
                    />
                    {passwordValue && (
                      <PasswordCriteria password={passwordValue} />
                    )}
                  </div>
                  <PrimaryButton 
                  type="submit"
                  disabled={isSubmitButtonDisabled}
                  className="w-full" text="Sign up" />
                  <button
                    onClick={() => router.push("/login")}
                    type="button"
                    className="text-sm text-gray text-center py-3"
                  >
                    Already have an account?{" "}
                    <span className="text-primary">Log in</span>
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

const validationSchema = yup.object().shape({
  firstName: yup.string().min(3, "First name must be at least 3 characters").required("Required"),
  lastName: yup.string().min(3, "Last name must be at least 3 characters").required("Required"),
  email: yup
    .string()
    .email("Invalid email")
    .test("test email", "Please enter a valid email", function (value) {
      const regex = emailRegex;
      return regex.test(value!);
    })
    .required("Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});