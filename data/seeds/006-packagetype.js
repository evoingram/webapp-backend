exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('packagetype')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('packagetype').insert([
				{
					id: 1,
					packagetype: 'ENVELOPE',
					description: 'Standard letter rate.'
				},
				{
					id: 2,
					packagetype: 'RECTPARCEL',
					description: 'Rectangular Parcel, the standard parcel.'
				},
				{
					id: 3,
					packagetype: 'NONRECTPARCEL',
					description: 'Non-rectangular parcel – impacts rate for PM.'
				},
				{
					id: 4,
					packagetype: 'FLATRATEENVELOPE',
					description: 'Flat Rate Envelope – PM and EM.'
				},
				{
					id: 5,
					packagetype: 'FLATRATEBOX',
					description: 'Flat Rate Box PM.'
				},
				{
					id: 6,
					packagetype: 'FLATRATELARGEBOX',
					description: 'Flat Rate Large Box PM.'
				},
				{
					id: 7,
					packagetype: 'POSTCARD',
					description: 'Postcard rate (FC and International FC)'
				},
				{
					id: 8,
					packagetype: 'FLAT',
					description: 'Flat rate (only effects rate for FC mail).'
				}
			]);
		});
};
