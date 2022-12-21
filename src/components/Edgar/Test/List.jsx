import React, {Fragment} from 'react'

export default function List({ data, deletedElem }) {
	return (

			<ul>
				{
					data.map(elem => {
						return (
							<Fragment key={elem.id}> 
							<span onClick= {() => deletedElem(elem.id)}>x</span>
								<li >{elem.name}</li>
								<li >{elem.price}</li>
								<li >{elem.amount}</li>
								<hr />
							</Fragment>
						

					)
					})
				}
			</ul>

	)
}
