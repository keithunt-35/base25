import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "./thirdweb.svg";
import { client } from "./client";

import React, { useState } from 'react';

export function App() {
	const [invoices, setInvoices] = useState([
		{
			id: '1',
			title: 'Dinner at Sushi Place',
			total: 120.50,
			participants: 4,
			date: '2024-01-15'
		},
		{
			id: '2',
			title: 'Uber Ride Share',
			total: 45.75,
			participants: 3,
			date: '2024-01-22'
		}
	]);

	const handleCreateInvoice = () => {
		window.location.href = "/create-invoice";
	};

	return (
		<main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
			<div className="py-20">
				<Header />
				<div className="flex flex-col items-center space-y-6 mb-20">
					<ConnectButton
						client={client}
						appMetadata={{
							name: "SplitBill",
							url: "https://splitbill.com",
						}}
					/>
					<button 
						onClick={() => window.location.href = "/dashboard"}
						className="px-8 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors text-lg font-semibold"
					>
						Start Splitting Bills
					</button>
				</div>
				<BillSplitFeatures />
				<div className="mt-16">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-2xl font-bold text-zinc-100">Recent Invoices</h2>
						<button 
							onClick={handleCreateInvoice}
							className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
						>
							Create New Invoice
						</button>
					</div>
					<div className="grid gap-4">
						{invoices.map((invoice) => (
							<InvoiceCard 
								key={invoice.id}
								title={invoice.title}
								total={invoice.total}
								participants={invoice.participants}
								date={invoice.date}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

function InvoiceCard(props: {
	title: string;
	total: number;
	participants: number;
	date: string;
}) {
	return (
		<div className="flex justify-between items-center border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors">
			<div>
				<h3 className="text-lg font-semibold text-zinc-100">{props.title}</h3>
				<p className="text-sm text-zinc-400">
					{props.participants} participants | {new Date(props.date).toLocaleDateString()}
				</p>
			</div>
			<div className="text-right">
				<p className="text-xl font-bold text-violet-500">${props.total.toFixed(2)}</p>
			</div>
		</div>
	);
}

function Header() {
	return (
		<header className="flex flex-col items-center mb-20 md:mb-20">
			<div className="size-[150px] bg-violet-600 rounded-full flex items-center justify-center mb-6">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 100-4 2 2 0 000 4z" />
				</svg>
			</div>
			<h1 className="text-2xl md:text-6xl font-bold tracking-tighter mb-6 text-zinc-100">
				Split
				<span className="text-violet-500 inline-block ml-2">Bills</span>
			</h1>
			<p className="text-zinc-300 text-base text-center max-w-md">
				Easily split bills with friends, track shared expenses, and settle up instantly with blockchain-powered payments.
			</p>
		</header>
	);
}

function BillSplitFeatures() {
	return (
		<div className="grid gap-4 lg:grid-cols-3 justify-center">
			<FeatureCard
				title="Quick Splits"
				description="Instantly divide bills among friends with just a few taps"
				icon="M9 8h6m-5 4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
			<FeatureCard
				title="Transparent Tracking"
				description="Real-time expense tracking and fair distribution of costs"
				icon="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
			/>
			<FeatureCard
				title="Instant Settlement"
				description="Blockchain-powered payments for instant and secure bill settlements"
				icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</div>
	);
}

function FeatureCard(props: {
	title: string;
	description: string;
	icon: string;
}) {
	return (
		<div className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700">
			<div className="mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={props.icon} />
				</svg>
			</div>
			<h2 className="text-lg font-semibold mb-2 text-zinc-100">{props.title}</h2>
			<p className="text-sm text-zinc-400">{props.description}</p>
		</div>
	);
}