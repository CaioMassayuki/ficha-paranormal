import CharacterInfo from "../../ui/characterInfo";
import { fetchSheetData } from "../../data";
import Attributes from "../../ui/attributes";

export default async function Sheet({ params }: { params: { id: string } }) {
  const data = await fetchSheetData(params.id);
  return (
    <>
      <div className="flex flex-col">
        <CharacterInfo id={data.id} profileInfo={data.profile} />
        <Attributes id={data.id} attributes={data.attributes}/>
      </div>
    </>
  );
}
