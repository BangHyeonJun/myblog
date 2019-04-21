import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    {/* 필요한 스크립트, 스타일 같은것을 가져옵니다. */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;
