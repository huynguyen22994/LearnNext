// Css Toàn Cục cho ứng dụng import tại đây
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    console.log('into pases/_app')
    return <Component {...pageProps} />;
}