import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ClubPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, []);

  return (
    <main>
    </main>
  );
};

export default ClubPage;
