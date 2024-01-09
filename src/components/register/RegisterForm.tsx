import { useEffect } from "react";
import { RegisterFormCSS } from "../../style/components/register/RegisterFormCSS";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterData } from "../../types/RegisterData";
import DoubleCheck from "./DoubleCheck";
import Agreement from "./Agreement";
import SubmitBtn from "../common/SubmitBtn";
import axios from "axios";
import { BASE_URL } from "../../configs";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<RegisterData>();

  console.log(BASE_URL);

  const onsubmit: SubmitHandler<RegisterData> = (data) => {
    const { username, password, password_confirm } = data;

    axios
      .post(
        `http://15.164.154.72:8080/register`,
        {
          username: username,
          password: password,
          password_confirm: password_confirm,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("회원가입 통신 성공", res);
      })
      .catch((err) => {
        console.log("로그인 에러", err);
      });
  };

  useEffect(() => {
    if (
      watch("password") !== watch("password_confirm") &&
      watch("password_confirm")
    ) {
      setError("password_confirm", {
        type: "password-mismatch",
        message: "비밀번호가 일치하지 않습니다.",
      });
    } else {
      clearErrors("password_confirm");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("password"), watch("password_confirm")]);

  return (
    <>
      <RegisterFormCSS onSubmit={handleSubmit(onsubmit)}>
        <fieldset>
          <input
            placeholder="아이디"
            {...register("username", { required: true })}
          />
          <DoubleCheck children={"중복"} />
        </fieldset>
        {errors.username && <span>잘못된 아이디입니다</span>}

        <fieldset>
          <input
            placeholder="비밀번호(영문, 숫자, 특수문자 포함 8 ~ 20자)"
            type="password"
            {...register("password", {
              required: true,
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/,
                message: "유효하지 않은 비밀번호 입니다.",
              },
            })}
          />
        </fieldset>
        {errors.password && <span>{errors.password.message}</span>}

        <fieldset>
          <input
            placeholder="비밀번호 확인"
            type="password"
            {...register("password_confirm", {
              required: true,
            })}
          />
        </fieldset>
        {(errors.password_confirm?.message && (
          <span>{errors.password_confirm.message}</span>
        )) ||
          (watch("password") !== watch("password_confirm") &&
            watch("password_confirm") && (
              <span>{errors.password_confirm?.message}</span>
            ))}

        <fieldset>
          <input
            placeholder="이메일"
            {...register("email", { required: true })}
          />
          <DoubleCheck children={"인증"} />
        </fieldset>
        {errors.email && <span>유효하지 않은 이메일입니다.</span>}

        <fieldset>
          <input placeholder="인증번호" />
          <DoubleCheck children={"확인"} />
        </fieldset>

        <Agreement />

        <fieldset className="radio-filed">
          <label>
            <input
              type="radio"
              value="true"
              {...register("agree", { required: true })}
            />
            동의
          </label>

          <label>
            <input type="radio" name="agree" defaultChecked value="false" />
            비동의
          </label>
        </fieldset>
        {errors.agree && <span>개인정보 동의서를 읽고 동의해주세요</span>}

        <SubmitBtn children={"회원가입"} bgcolor="#7AC3CE" color="#fff" />
      </RegisterFormCSS>
    </>
  );
}

export default RegisterForm;
