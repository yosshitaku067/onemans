import type React from "react";

type Props = {};

export const Timeline: React.FC<Props> = () => {
	return (
		<section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
			<div className="mx-auto w-full max-w-6xl px-4 md:px-6">
				<div className="flex flex-col justify-center divide-y divide-slate-200 py-6 sm:py-8 lg:py-12">
					<div className="mx-auto w-full max-w-3xl">
						<h2 className="mb-4 text-center font-bold text-2xl text-gray-800 md:mb-6 lg:text-3xl">
							Project Timeline
						</h2>
						{/* <!-- Vertical Timeline #1 --> */}
						<div className="-my-6">
							{/* <!-- Item #1 --> */}
							<div className="group relative py-6 pl-8 sm:pl-32">
								{/* <!-- Purple label --> */}
								<div className="mb-1 font-medium text-indigo-500 sm:mb-0">
									Web
								</div>
								{/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
								<div className="before:-translate-x-1/2 after:-translate-x-1/2 mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:after:left-0 sm:after:ml-[6.5rem] sm:before:left-0 sm:before:ml-[6.5rem]">
									<time className="left-0 mb-3 inline-flex h-auto w-24 translate-y-0.5 items-center justify-center rounded-lg bg-emerald-100 py-1 font-semibold text-emerald-600 text-xs uppercase sm:absolute sm:mb-0">
										2024年 後半～
									</time>
									<div className="font-bold text-slate-900 text-xl">
										業務システム開発
									</div>
								</div>
								{/* <!-- Content --> */}
								<div className="break-keep text-slate-500">
									社内利用の業務Webシステム開発を担当。
									<br />
									Remix / Conform / Hono / AWS Lambda / shadcnui / TailwindCSS /
									zod / biome / PostgreSQL / TypeScript
								</div>
							</div>

							{/* <!-- Item #2 --> */}
							<div className="group relative py-6 pl-8 sm:pl-32">
								{/* <!-- Purple label --> */}
								<div className="mb-1 font-medium text-indigo-500 sm:mb-0">
									Web + Mobile
								</div>
								{/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
								<div className="before:-translate-x-1/2 after:-translate-x-1/2 mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:after:left-0 sm:after:ml-[6.5rem] sm:before:left-0 sm:before:ml-[6.5rem]">
									<time className="left-0 mb-3 inline-flex h-auto w-24 translate-y-0.5 items-center justify-center rounded-lg bg-emerald-100 py-1 font-semibold text-emerald-600 text-xs uppercase sm:absolute sm:mb-0">
										2023年 後半
										<br />～<br />
										2024年 前半
									</time>
									<div className="font-bold text-slate-900 text-xl">
										電話帳サービス開発
									</div>
								</div>
								{/* <!-- Content --> */}
								<div className="text-slate-500">
									Web + モバイル構成の電話帳サービスの開発。
									<br />
									React / AWS S3 / Express / Flutter / TailwindCSS / zod /
									ESLint / Prettier / TypeScript
								</div>
							</div>

							{/* <!-- Item #3 --> */}
							<div className="group relative py-6 pl-8 sm:pl-32">
								{/* <!-- Purple label --> */}
								<div className="mb-1 font-medium text-indigo-500 sm:mb-0">
									Web + インフラ
								</div>
								{/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
								<div className="before:-translate-x-1/2 after:-translate-x-1/2 mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:after:left-0 sm:after:ml-[6.5rem] sm:before:left-0 sm:before:ml-[6.5rem]">
									<time className="left-0 mb-3 inline-flex h-auto w-24 translate-y-0.5 items-center justify-center rounded-lg bg-emerald-100 py-2 font-semibold text-emerald-600 text-xs uppercase sm:absolute sm:mb-0">
										2022年
									</time>
									<div className="font-bold text-slate-900 text-xl">
										動画データ分析基盤および検索システムの開発
									</div>
								</div>
								{/* <!-- Content --> */}
								<div className="text-slate-500">
									動画分析用のシステム基盤の設計および導入とWebシステムの開発。
									<br />
									Elasticsearch / PostgreSQL / Windows Server / Nginx / Node.js
									/ NestJS / React / Ionic / ESLint / Prettier / Google Map /
									TypeScript
								</div>
							</div>

							{/* <!-- Item #4 --> */}
							<div className="group relative py-6 pl-8 sm:pl-32">
								{/* <!-- Purple label --> */}
								<div className="mb-1 font-medium text-indigo-500 sm:mb-0">
									モバイル
								</div>
								{/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
								<div className="before:-translate-x-1/2 after:-translate-x-1/2 mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden sm:flex-row sm:after:left-0 sm:after:ml-[6.5rem] sm:before:left-0 sm:before:ml-[6.5rem]">
									<time className="left-0 mb-3 inline-flex h-auto w-24 translate-y-0.5 items-center justify-center rounded-lg bg-emerald-100 py-1 font-semibold text-emerald-600 text-xs uppercase sm:absolute sm:mb-0">
										2021年
									</time>
									<div className="font-bold text-slate-900 text-xl">
										配送管理モバイルアプリケーション開発
									</div>
								</div>
								{/* <!-- Content --> */}
								<div className="text-slate-500">
									配送管理モバイルアプリケーションの開発
									<br />
									React Native / Realm / ESLint / Prettier / TypeScript
								</div>
							</div>
						</div>
						{/* <!-- End: Vertical Timeline #1 --> */}
					</div>
				</div>
				<p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
					その他経験技術）Angular / Electron / Rust / Android（Java） /
					iOS（objective-c） / GitLab / GitLab CI / Redmine / Jira / Confluence
					/ Gatsby
				</p>
			</div>
		</section>
	);
};
