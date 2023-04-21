import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "@/components/nav/menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="flex flex-col p-4 h-full">
			<div className="titleWrapper min-w-md whitespace-nowrap">
				<a href="/" className="">
					<h1 className="text-right">
						TALL SAD GIRL AND
						<br />
						SHORT PUNK GIRL
						<br />
						ARE FRIENDS
					</h1>
					<h3 className="text-md text-right">
						based on a very small novel
					</h3>
				</a>
			</div>

			{/* <Image
				className=""
				width={3497}
				height={5246}
				src="https://images.unsplash.com/photo-1476459216969-94c7100f88a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
			/> */}

			<Menu />
		</main>
	);
}
