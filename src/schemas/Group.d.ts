import { CustomFilter } from './CustomFilter'
import { Employee } from './Employee'

export type GroupType = 'static' | 'virtual'

export interface Group {
    id: number
    name: string
    description?: string
    type: GroupType
    filters?: CustomFilter
    employees: Employee[]
}
