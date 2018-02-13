wm.types = {
	"types": {
		"addnetwork.RootResponse": {
			"service": "addnetwork",
			"liveService": false,
			"internal": false,
			"fields": {
				"state": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"boolean": {
			"primitiveType": "Boolean",
			"internal": true
		},
		"byte": {
			"primitiveType": "Number",
			"internal": true
		},
		"char": {
			"primitiveType": "String",
			"internal": true
		},
		"com.wavemaker.runtime.security.WMCurrentUser": {
			"service": "securityService",
			"liveService": false,
			"internal": false,
			"fields": {
				"authenticated": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "boolean",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"loginTime": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "long",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"securityEnabled": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "boolean",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"tenantId": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "int",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"userId": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"userName": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"userRoles": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				}
			}
		},
		"double": {
			"primitiveType": "Number",
			"internal": true
		},
		"executewf.RootResponse": {
			"service": "executewf",
			"liveService": false,
			"internal": false,
			"fields": {
			}
		},
		"float": {
			"primitiveType": "Number",
			"internal": true
		},
		"getattribute.RootResponse": {
			"service": "getattribute",
			"liveService": false,
			"internal": false,
			"fields": {
				"datavalue": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphInfo.RootResponse": {
			"service": "graphInfo",
			"liveService": false,
			"internal": false,
			"fields": {
				"RootResponseROOT": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "graphInfo.RootResponseROOTEntryItem",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphInfo.RootResponseROOTEntryItem": {
			"service": "graphInfo",
			"liveService": false,
			"internal": false,
			"fields": {
				"description": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"directed": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"edge_attributes": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "graphInfo.edge_attributes",
					"required": true,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"file_name": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				},
				"graph_id": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"labeled": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"name": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"node_attributes": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "graphInfo.node_attributes",
					"required": true,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"numberOfEdges": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"numberOfNodes": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"original_format": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"weighted": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphInfo.edge_attributes": {
			"service": "graphInfo",
			"liveService": false,
			"internal": false,
			"fields": {
				"betweenness_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"coappearances": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"coauthorship": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"degree_product": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphInfo.node_attributes": {
			"service": "graphInfo",
			"liveService": false,
			"internal": false,
			"fields": {
				"betweenness_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"closeness_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"clustering": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"degree": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"id": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"indegree": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				},
				"label": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"load_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"name": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"node_clique_number": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"outdegree": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"scientist": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphfilter.RootResponse": {
			"service": "graphfilter",
			"liveService": false,
			"internal": false,
			"fields": {
				"RootResponseROOT": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "graphfilter.RootResponseROOTEntryItem",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphfilter.RootResponseROOTEntryItem": {
			"service": "graphfilter",
			"liveService": false,
			"internal": false,
			"fields": {
				"description": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"directed": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"edge_attributes": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "graphfilter.edge_attributes",
					"required": true,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"file_name": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				},
				"graph_id": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"labeled": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"name": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"node_attributes": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "graphfilter.node_attributes",
					"required": true,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"numberOfEdges": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"numberOfNodes": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"original_format": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"weighted": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphfilter.edge_attributes": {
			"service": "graphfilter",
			"liveService": false,
			"internal": false,
			"fields": {
				"betweenness_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"degree_product": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphfilter.node_attributes": {
			"service": "graphfilter",
			"liveService": false,
			"internal": false,
			"fields": {
				"betweenness_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"closeness_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"clustering": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"degree": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"id": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"load_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"node_clique_number": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphinfo2.RootResponse": {
			"service": "graphinfo2",
			"liveService": false,
			"internal": false,
			"fields": {
				"RootResponseROOT": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "graphinfo2.RootResponseROOTEntryItem",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphinfo2.RootResponseROOTEntryItem": {
			"service": "graphinfo2",
			"liveService": false,
			"internal": false,
			"fields": {
				"description": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"directed": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"edge_attributes": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "graphinfo2.edge_attributes",
					"required": true,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				},
				"file_name": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				},
				"graph_id": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"labeled": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"name": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"node_attributes": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "graphinfo2.node_attributes",
					"required": true,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"numberOfEdges": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"numberOfNodes": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"original_format": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"weighted": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphinfo2.edge_attributes": {
			"service": "graphinfo2",
			"liveService": false,
			"internal": false,
			"fields": {
				"betweenness_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"coappearances": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"coauthorship": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"degree_product": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphinfo2.node_attributes": {
			"service": "graphinfo2",
			"liveService": false,
			"internal": false,
			"fields": {
				"betweenness_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"closeness_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"clustering": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"degree": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"id": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"indegree": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 11,
					"noChange": [],
					"include": []
				},
				"label": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 8,
					"noChange": [],
					"include": []
				},
				"load_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"name": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 7,
					"noChange": [],
					"include": []
				},
				"node_clique_number": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				},
				"outdegree": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 10,
					"noChange": [],
					"include": []
				},
				"scientist": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.String",
					"required": true,
					"fieldOrder": 9,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphquery.RootResponse": {
			"service": "graphquery",
			"liveService": false,
			"internal": false,
			"fields": {
				"qid": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"result": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "graphquery.result",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphquery.node_setsEntryItem": {
			"service": "graphquery",
			"liveService": false,
			"internal": false,
			"fields": {
				"coverage": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"nodes": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "graphquery.nodesEntryItem",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphquery.nodesEntryItem": {
			"service": "graphquery",
			"liveService": false,
			"internal": false,
			"fields": {
				"betweenness_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 3,
					"noChange": [],
					"include": []
				},
				"closeness_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 2,
					"noChange": [],
					"include": []
				},
				"clustering": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 6,
					"noChange": [],
					"include": []
				},
				"degree": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 1,
					"noChange": [],
					"include": []
				},
				"id": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				},
				"load_centrality": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Double",
					"required": true,
					"fieldOrder": 4,
					"noChange": [],
					"include": []
				},
				"node_clique_number": {
					"isList": false,
					"fieldSubType": null,
					"exclude": [],
					"type": "java.lang.Integer",
					"required": true,
					"fieldOrder": 5,
					"noChange": [],
					"include": []
				}
			}
		},
		"graphquery.result": {
			"service": "graphquery",
			"liveService": false,
			"internal": false,
			"fields": {
				"node_sets": {
					"isList": true,
					"fieldSubType": null,
					"exclude": [],
					"type": "graphquery.node_setsEntryItem",
					"required": true,
					"fieldOrder": 0,
					"noChange": [],
					"include": []
				}
			}
		},
		"int": {
			"primitiveType": "Number",
			"internal": true
		},
		"java.lang.Boolean": {
			"primitiveType": "Boolean",
			"internal": false
		},
		"java.lang.Byte": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Character": {
			"primitiveType": "String",
			"internal": false
		},
		"java.lang.Double": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Float": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Integer": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Long": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.Short": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.lang.String": {
			"primitiveType": "String",
			"internal": false
		},
		"java.lang.StringBuffer": {
			"primitiveType": "String",
			"internal": false
		},
		"java.math.BigDecimal": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.math.BigInteger": {
			"primitiveType": "Number",
			"internal": false
		},
		"java.sql.Date": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.sql.Time": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.sql.Timestamp": {
			"primitiveType": "Date",
			"internal": false
		},
		"java.util.Date": {
			"primitiveType": "Date",
			"internal": false
		},
		"long": {
			"primitiveType": "Number",
			"internal": true
		},
		"org.joda.time.LocalDateTime": {
			"primitiveType": "DateTime",
			"internal": true
		},
		"short": {
			"primitiveType": "Number",
			"internal": true
		}
	}
};