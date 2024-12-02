import { FC } from "react"
import styles from "./styles.module.scss"

export const ButtonTypes = {
    SUBMIT: "submit",
    BUTTON: "button",
} as const
export type ButtonType = (typeof ButtonTypes)[keyof typeof ButtonTypes]

type BaseButtonProps = {
    children: React.ReactNode
    type?: ButtonType
    onClick?: () => void
    href?: string
    target?: HTMLAnchorElement["target"]
    isDisabled?: boolean
    isLoading?: boolean
    className?: string
    loadingClassName?: string
}

export const BaseButton: FC<BaseButtonProps> = ({
    children,
    type = ButtonTypes.BUTTON,
    onClick,
    href,
    target,
    isDisabled = false,
    isLoading = false,
    className,
    loadingClassName,
}) => {
    const classNames = `${styles.button} ${isDisabled ? styles.disabled : ""} ${isLoading ? styles.isLoading : ""} ${className || ""}`
    const loadingClassNames = `${styles.loadingIcon} ${loadingClassName || ""}`

    const onClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        // ボタンが無効またはローディング中の場合は何もしない
        if (isDisabled || isLoading) return

        if (onClick) onClick()
    }

    // リンク先とtargetが指定されている場合はaタグを使用してリンクを生成
    if (href && target)
        return (
            <a className={classNames} href={href} target={target}>
                {children}
            </a>
        )

    return (
        <button
            disabled={isDisabled || isLoading}
            type={type}
            className={classNames}
            onClick={onClickButton}
        >
            {isLoading ? (
                <span
                    className={loadingClassNames}
                    data-testid="loading-icon"
                ></span>
            ) : (
                children
            )}
        </button>
    )
}
