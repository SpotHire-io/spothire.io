import { StatelessComponent } from 'react'

interface Props {
    className?: string
    fullWidth?: boolean
    isOpen: boolean
    contentLabel: string
    onClose: React.EventHandler<any>
    children: React.ReactNode
}

declare const Modal: StatelessComponent<Props>
export default Modal
