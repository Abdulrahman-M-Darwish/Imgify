import React from "react";
import { SignIn } from "@clerk/nextjs";

type Props = {};

const SignInPage: React.FC = (props: Props) => {
	return <SignIn path="/sign-in" />;
};

export default SignInPage;
