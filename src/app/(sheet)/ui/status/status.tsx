"use client";

import Shield from "@/../public/shieldSVG";
import ColoredNumberStatus from "./coloredNumberStatus";
import { StatusExtraValues, StatusInfo, StatusValues } from "../../definitions";
import { useEffect, useState } from "react";
import { useDebounceCallback } from "@/app/hooks/useDebounceCallback";
import {
  updateEffortStatusInfo,
  updateHealthStatusInfo,
  updateSanityStatusInfo,
  updateStatusExtraInfo,
} from "../../actions";
import { LONG_DEBOUNCE, MEDIUM_DEBOUNCE } from "@/constants";

export default function Status({
  statusInfo,
  id,
}: {
  id: string;
  statusInfo: StatusInfo;
}) {
  const [newExtraStatus, setNewExtraStatus] = useState<StatusExtraValues>(
    statusInfo.extraStatus || { defense: 0, block: 0, dodge: 0, speed: 0 }
  );

  const createDebouncedStatusChangeHandler = (handler: Function) => {
    return useDebounceCallback(async (newStatusValues: StatusValues) => {
      await handler(newStatusValues, id);
    }, MEDIUM_DEBOUNCE);
  };

  const handleExtraStatusChange = useDebounceCallback(
    async (newExtraStatus: StatusExtraValues) => {
      await updateStatusExtraInfo(newExtraStatus, id);
    },
    LONG_DEBOUNCE
  );

  useEffect(() => {
    handleExtraStatusChange(newExtraStatus);
  }, [newExtraStatus]);

  return (
    <>
      <div className="w-96 ml-2 rounded-xl flex flex-col bg-neutral-900">
        <div className="m-2 flex justify-center">
          <h1 className="text-2xl">Status</h1>
        </div>
        <div className="m-4">
          <div>
            <ColoredNumberStatus
              title="Vida"
              color="red"
              value={statusInfo.health}
              handleStatusChange={createDebouncedStatusChangeHandler(
                updateHealthStatusInfo
              )}
            />
            <ColoredNumberStatus
              title="Sanidade"
              color="blue"
              value={statusInfo.sanity}
              handleStatusChange={createDebouncedStatusChangeHandler(
                updateSanityStatusInfo
              )}
            />
            <ColoredNumberStatus
              title="Pontos de Esforço"
              color="yellow"
              value={statusInfo.effort}
              handleStatusChange={createDebouncedStatusChangeHandler(
                updateEffortStatusInfo
              )}
            />
          </div>
          <div className="my-4 flex justify-around items-center">
            <div className="flex flex-col items-center">
              <h1>Defesa</h1>
              <div className="relative">
                <Shield width={64} height={64} />
                <input
                  defaultValue={newExtraStatus.defense}
                  className="w-10 absolute right-3 top-3 text-3xl text-center"
                  type="number"
                  onChange={(e) =>
                    setNewExtraStatus({
                      ...newExtraStatus,
                      defense: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center mt-1">
                <span className="mr-2">Deslocamento</span>
                <input
                  defaultValue={newExtraStatus.speed}
                  className="w-10 text-center flex items-center justify-center p-2 border h-6"
                  type="number"
                  onChange={(e) =>
                    setNewExtraStatus({
                      ...newExtraStatus,
                      speed: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div className="flex items-center mt-1">
                <span className="mr-2">Bloqueio</span>
                <input
                  defaultValue={newExtraStatus.block}
                  className="w-10 text-center flex items-center justify-center p-2 border h-6"
                  type="number"
                  onChange={(e) =>
                    setNewExtraStatus({
                      ...newExtraStatus,
                      block: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div className="flex items-center mt-1">
                <span className="mr-2">Esquiva</span>
                <input
                  defaultValue={newExtraStatus.dodge}
                  className="w-10 text-center flex items-center justify-center p-2 border h-6"
                  type="number"
                  onChange={(e) =>
                    setNewExtraStatus({
                      ...newExtraStatus,
                      dodge: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
