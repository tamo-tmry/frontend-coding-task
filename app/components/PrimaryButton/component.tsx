import { FC } from "react"
import { BaseButton, ButtonType } from "../BaseButton/component"
import styles from "./styles.module.scss"

export type ButtonProps = {
    children: React.ReactNode
    onClick: () => void
    type?: ButtonType
    className?: string
    href?: never
    target?: never
    isDisabled?: boolean
    isLoading?: boolean
}

export type LinkProps = {
    children: React.ReactNode
    href: string
    target?: HTMLAnchorElement["target"]
    className?: string
    type?: never
    onClick?: never
    isDisabled?: boolean
    isLoading?: never
}

type PrimaryButtonProps = ButtonProps | LinkProps

export const PrimaryButton: FC<PrimaryButtonProps> = ({
    children,
    type,
    onClick,
    href,
    target,
    isDisabled,
    isLoading,
}) => {
    return (
        <BaseButton
            onClick={onClick}
            type={type}
            href={href}
            target={target}
            isDisabled={isDisabled}
            isLoading={isLoading}
            className={styles.primaryButton}
            loadingClassName={styles.loadingIcon}
        >
            {children}
        </BaseButton>
    )
}
