import { Injectable } from '@nestjs/common'

import { PrismaService } from '@config/prisma.service'

@Injectable()
export class ReportsService {
	constructor(private prisma: PrismaService) {}

	//отчет по обучающимся с указанием даты выдачи справки и сроком ее действия определенного отделения

	async getDepartmentReport(
		departmentId: number,
		sort: 'asc' | 'desc' = 'asc',
		group?: string,
		hg?: string | undefined,
		pe?: string | undefined
	) {
		const departmentReport = await this.prisma.department.findMany({
			where: {
				id: +departmentId
			},
			select: {
				id: true,
				name: true,
				courses: {
					select: {
						number: true,
						groups: {
							where: {
								name: group || undefined
							},
							select: {
								name: true,
								students: {
									where: {
										isExpelled: false
									},
									orderBy: {
										surname: sort
									},
									select: {
										name: true,
										surname: true,
										secondName: true,
										medicalCertificates: {
											where: {
												healthGroup: {
													name: hg || undefined
												},
												physicalEducation: {
													name: pe || undefined
												}
											},
											select: {
												startDate: true,
												finishDate: true,
												physicalEducation: {
													select: {
														name: true
													}
												},
												healthGroup: {
													select: {
														name: true
													}
												}
											},
											orderBy: {
												startDate: 'desc'
											},
											take: 1
										}
									}
								}
							}
						}
					}
				}
			}
		})

		return departmentReport
	}

	//отчет по обучающимся с указанием даты выдачи справки и сроком ее действия определенной группы
	async getGroupReport(
		groupId: number,
		sort: 'asc' | 'desc' = 'asc',
		hg?: string,
		pe?: string
	) {
		const groupReport = await this.prisma.group.findMany({
			where: {
				id: +groupId
			},
			select: {
				name: true,
				course: {
					select: {
						number: true
					}
				},
				students: {
					where: {
						isExpelled: false
					},
					orderBy: {
						surname: sort
					},
					select: {
						surname: true,
						name: true,
						secondName: true,
						medicalCertificates: {
							where: {
								healthGroup: {
									name: hg || undefined
								},
								physicalEducation: {
									name: pe || undefined
								}
							},
							select: {
								startDate: true,
								finishDate: true,
								healthGroup: {
									select: {
										name: true
									}
								},
								physicalEducation: {
									select: {
										name: true
									}
								}
							},
							take: 1
						}
					}
				}
			}
		})

		return groupReport
	}

	async getExpiredCertificatesReport(
		sort: 'asc' | 'desc' = 'asc',
		department?: string,
		course?: number,
		group?: string
	) {
		return this.prisma.student.findMany({
			orderBy: {
				surname: sort
			},
			where: {
				group: {
					name: group,
					course: course
						? {
								number: +course,
								department: {
									name: department
								}
							}
						: {
								number: undefined,
								department: {
									name: department
								}
							}
				},
				isExpelled: false,
				medicalCertificates: {
					some: {
						finishDate: {
							lt: new Date()
						}
					}
				}
			},
			select: {
				surname: true,
				name: true,
				secondName: true,
				birthDate: true,
				group: {
					select: {
						name: true,
						course: {
							select: {
								number: true,
								department: {
									select: {
										name: true
									}
								}
							}
						}
					}
				}
			}
		})
	}

	//лист здоровья

	async getHealthGroupCheckListReportData(
		departmentId: number,
		course: number,
		healthGroupId: number,
		sort: 'asc' | 'desc' = 'asc',
		group?: string | undefined
	) {
		return this.prisma.department.findMany({
			where: {
				id: +departmentId
			},
			select: {
				name: true,
				courses: {
					where: {
						number: +course
					},
					select: {
						number: true,
						groups: {
							where: {
								name: group || undefined
							},
							select: {
								name: true,
								students: {
									orderBy: {
										surname: sort
									},
									select: {
										surname: true,
										name: true,
										secondName: true,
										birthDate: true,
										medicalCertificates: {
											where: {
												healthGroup: {
													id: +healthGroupId
												}
											},
											select: {
												healthGroup: {
													select: {
														name: true
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		})
	}

	async getPhysicalGroupCheckListReport(
		departmentId: number,
		course: number,
		physicalEducationId: number,
		sort: 'asc' | 'desc' = 'asc',
		group?: string | undefined
	) {
		return this.prisma.department.findMany({
			where: {
				id: +departmentId
			},
			select: {
				name: true,
				courses: {
					where: {
						number: +course
					},
					select: {
						number: true,
						groups: {
							where: {
								name: group || undefined
							},
							select: {
								name: true,
								students: {
									orderBy: {
										surname: sort
									},
									select: {
										surname: true,
										name: true,
										secondName: true,
										birthDate: true,
										medicalCertificates: {
											where: {
												physicalEducation: {
													id: +physicalEducationId
												}
											},
											select: {
												physicalEducation: {
													select: {
														name: true
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		})
	}
}
