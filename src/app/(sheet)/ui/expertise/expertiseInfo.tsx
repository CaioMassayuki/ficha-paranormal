import ExpertiseRow from "./expertiseRow";
import { ATTRIBUTES_ENUM, TRAINING_ENUM, EXPERTISES } from '@/constants'

const defaultExpertisesInfo = EXPERTISES.map((value, index) => ({
	id: index,
	name: value,
	dice: ATTRIBUTES_ENUM.INT,
	diceValue: 0,
	exp: TRAINING_ENUM.NENHUM,
	bonus: 0
}))

export const GRID_STYLE = `
grid
grid-cols-[180px_90px_140px_64px]
`

export default function Expertise({ expertisesInfo = defaultExpertisesInfo }) {
	return (
		<>
			<div className='p-4 ml-4 rounded-xl flex flex-col bg-neutral-900'>
				<div className='flex justify-center mb-4'>
					<h1 className='text-2xl'>Pericias</h1>
				</div>
				<table>
					<thead className='block'>
						<tr className={GRID_STYLE}>
							<th>Pericia</th>
							<th>Dados</th>
							<th>Treinamento</th>
							<th>Bônus</th>
						</tr>
					</thead>
					<tbody className='block max-h-64 overflow-y-auto'>
						{expertisesInfo.map((expertise) => (
							<ExpertiseRow
								key={`${expertise.name}`}
								expertise={expertise}
							/>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}
