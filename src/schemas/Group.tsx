import CustomFilter from './CustomFilter'
import Employee from './Employee'

interface Group {
    id: number
    name: string
    description?: string
    type: 'static' | 'virtual'
    filters?: CustomFilter
    employees: Employee[]
}

export default Group
