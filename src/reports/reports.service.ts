import { Injectable } from '@nestjs/common'

import { PrismaService } from '@config/prisma.service'
import { endOfDay, startOfDay } from 'date-fns'

@Injectable()
export class ReportsService {
	constructor(private prisma: PrismaService) {}

	//отчет по обучающимся с указанием даты выдачи справки и сроком ее действия определенного отделения

	async getDepartmentReport(departmentId: number) {
		const departmentReport = await this.prisma.department.findMany({
			where: {
				id: +departmentId
			},
			select: {
				id: true,
				name: true,
				courses: {
					select: {
						groups: {
							select: {
								name: true,
								students: {
									select: {
										name: true,
										surname: true,
										secondName: true,
										medicalCertificates: {
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
	async getGroupReport(groupId: number) {
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
					select: {
						surname: true,
						name: true,
						secondName: true,
						medicalCertificates: {
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
							orderBy: {
								startDate: 'desc'
							},
							take: 1
						}
					}
				}
			}
		})

		return groupReport
	}

	async getExpiredCertificatesReport() {
		return this.prisma.student.findMany({
			where: {
				medicalCertificates: {
					some: {
						finishDate: {
							lt: new Date()
						}
					}
				}
			}
		})
	}

	//отчеты за период времени/конкретную дату в разрезе различных показателей медицинских справок
	async getReportsForPeriod(startDate: Date, endDate: Date) {
		const startOfDayDate = startOfDay(startDate)
		const endOfDayDate = endOfDay(endDate)

		return this.prisma.student.findMany({
			include: {
				medicalCertificates: {
					where: {
						startDate: {
							lte: endOfDayDate
						},
						finishDate: {
							gte: startOfDayDate
						}
					}
				}
			}
		})
	}

	//лист здоровья
	async getPhysicalGroupCheckListReport(
		departmentId: number,
		courseId: number,
		physicalEducationId: number
	) {
		return this.prisma.department.findMany({
			where: {
				id: +departmentId
			},
			select: {
				name: true,
				courses: {
					where: {
						number: +courseId
					},
					select: {
						number: true,
						groups: {
							select: {
								name: true,
								students: {
									select: {
										surname: true,
										name: true,
										secondName: true,
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
