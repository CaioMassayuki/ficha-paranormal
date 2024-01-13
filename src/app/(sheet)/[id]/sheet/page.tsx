import CharacterInfo from "../../ui/characterInfo";
import { fetchCharacterInfo } from "../../data";

export default async function Sheet({ params }: { params: { id: string } }) {
  const data = await fetchCharacterInfo(params.id);
  return (
    <>
      <CharacterInfo profileInfo={data} />
    </>
  );
}
