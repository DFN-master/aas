const rules = {
	user: {
		static: [],
	},

	superv: {
		static: [
			"drawer-superv-items:view",
			"tickets-manager:showall",
			"user-modal:editProfile",
		],
	},

	admin: {
		static: [
			//"dashboard:view",
			"drawer-admin-items:view",
			"tickets-manager:showall",
			"user-modal:editProfile",
			"user-modal:editQueues",
			"ticket-options:deleteTicket",
			"contacts-page:deleteContact",
			"connections-page:actionButtons",
			"connections-page:addConnection",
			"connections-page:editOrDeleteConnection"
		],
	},
};

export default rules;
