import getSpotifyToken from "../api/token";
import { ErrorBox } from "../styles/Error";

export default function App({ error }) {
  return <ErrorBox {...error} />;
}

export async function getServerSideProps() {
  try {
    const token = await getSpotifyToken(
      process.env.SPOTIFY_CLIENT_ID,
      process.env.SPOTIFY_CLIENT_SECRET,
    );
    console.log(token);
    return {
      redirect: {
        permanent: false,
        destination: `/demo?token=${token}`,
      },
    };
  } catch {
    const error = {
      message:
        "Server-side get token error. Check your id and serect in .env file.",
    };
    return { props: { error } };
  }
}
