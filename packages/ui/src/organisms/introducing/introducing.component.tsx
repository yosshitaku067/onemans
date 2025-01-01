import type React from "react";

type Props = {};

export const Introducing: React.FC<Props> = () => {
	return (
		<div className="bg-white py-6 sm:py-8 lg:py-12">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<div className="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
					<p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">
						Abount me
					</p>

					<h2 className="mb-4 text-center font-bold text-2xl text-gray-800 md:mb-6 lg:text-3xl">
						ソフトウェアエンジニア
					</h2>

					<p className="mx-auto max-w-screen-md break-keep text-center text-gray-500 md:text-lg">
						30代中堅ソフトウェアエンジニア。
						<wbr />
						Web開発やモバイルアプリ開発、組み込み開発など様々な開発プロジェクトを担当してきました。
						<wbr />
						Web開発をもっとも得意としており、現在は社内SEとして社内システムの開発を担当しています。
					</p>
				</div>
			</div>
		</div>
	);
};
