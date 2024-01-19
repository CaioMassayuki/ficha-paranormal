import CharacterInfo from "../../ui/characterInfo";
import { mongoFetchSheetData } from "../../data";
import Attributes from "../../ui/attributes";
import Status from "../../ui/status/status";
import Expertise from "../../ui/expertise/expertiseInfo";

export default async function Sheet({ params }: { params: { id: string } }) {
  const data = await mongoFetchSheetData(params.id);
  return (
    <>
      {data !== null ? (
        <>
          <div className="flex flex-col">
            <CharacterInfo id={data._id} profileInfo={data.profile} />
            <Attributes id={data._id} attributes={data.attributes} />
          </div>
          <Status id={data._id} statusInfo={data.status} />
          <Expertise />
        </>
      ) : (
        <>Cound't Find</>
      )}
    </>
  );
}
