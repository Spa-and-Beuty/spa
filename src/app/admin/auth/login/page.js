import Image from "next/image";

export default function Login() {
  return (
    <section className="container m-auto">
      <div className={"flex items-center justify-center"}>
        <Image
          src={"/assets/new_logo.jpg"}
          alt={"logo"}
          width={200}
          height={200}
        />
      </div>
      <div>
        <h1>Welcome</h1>
        <span>Please login to admin dashboard</span>
        <form>
          <input type={"email"} placeholder={"EMAIL"} />
          <input type={"password"} placeholder={"PASSWORD"} />
          <button
            type={"submit"}
            className={"px-6 py-3 bg-link-color-hover text-white rounded"}
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
