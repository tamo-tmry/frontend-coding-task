"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonTypes } from "./components/BaseButton/component"
import { PrimaryButton } from "./components/PrimaryButton/component"
import { SecondaryButton } from "./components/SecondaryButton/component"
import { TertiaryButton } from "./components/TertiaryButton/component"
import styles from "./styles.module.scss"
import { faPen } from "@fortawesome/free-solid-svg-icons"

export default function Page() {
    const onClick = () => {
        console.log("onClick")
    }

    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <h1 className={styles.title}>Primary Button</h1>
                <ul className={styles.buttonList}>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン（type=button）
                        </h2>
                        <PrimaryButton onClick={onClick}>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faPen}
                            />
                            編集
                        </PrimaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン_高さ指定あり100px（type=button）
                        </h2>
                        <div style={{ height: "100px" }}>
                            <PrimaryButton onClick={onClick}>
                                <FontAwesomeIcon
                                    className={styles.icon}
                                    icon={faPen}
                                />
                                編集
                            </PrimaryButton>
                        </div>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン（type=submit）
                        </h2>
                        <PrimaryButton
                            onClick={onClick}
                            type={ButtonTypes.SUBMIT}
                        >
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                            編集
                        </PrimaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン_非活性（type=submit）
                        </h2>
                        <PrimaryButton
                            isDisabled={true}
                            onClick={onClick}
                            type={ButtonTypes.SUBMIT}
                        >
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                            編集
                        </PrimaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン_ローディング（type=submit）
                        </h2>
                        <PrimaryButton
                            isLoading={true}
                            onClick={onClick}
                            type={ButtonTypes.SUBMIT}
                        >
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                            編集
                        </PrimaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            リンク（target=_blank）
                        </h2>
                        <PrimaryButton
                            target="_blank"
                            href="https://example.com/"
                        >
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                            編集
                        </PrimaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            リンク_非活性（target=_blank）
                        </h2>
                        <PrimaryButton
                            isDisabled={true}
                            target="_blank"
                            href="https://example.com/"
                        >
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                            編集
                        </PrimaryButton>
                    </li>
                </ul>
            </section>
            <section className={styles.section}>
                <h1 className={styles.title}>Secondary Button</h1>
                <ul className={styles.buttonList}>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン（type=button）
                        </h2>
                        <SecondaryButton onClick={onClick}>
                            編集
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                        </SecondaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン_高さ指定あり100px（type=button）
                        </h2>
                        <div style={{ height: "100px" }}>
                            <SecondaryButton onClick={onClick}>
                                編集
                                <FontAwesomeIcon
                                    icon={faPen}
                                    className={styles.icon}
                                />
                            </SecondaryButton>
                        </div>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン（type=submit）
                        </h2>
                        <SecondaryButton
                            onClick={onClick}
                            type={ButtonTypes.SUBMIT}
                        >
                            編集
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                        </SecondaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン_非活性（type=submit）
                        </h2>
                        <SecondaryButton
                            isDisabled={true}
                            onClick={onClick}
                            type={ButtonTypes.SUBMIT}
                        >
                            編集
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                        </SecondaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン_ローディング（type=submit）
                        </h2>
                        <SecondaryButton
                            isLoading={true}
                            onClick={onClick}
                            type={ButtonTypes.SUBMIT}
                        >
                            編集
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                        </SecondaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            リンク（target=_blank）
                        </h2>
                        <SecondaryButton onClick={onClick}>
                            編集
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                        </SecondaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            リンク_非活性（target=_blank）
                        </h2>
                        <SecondaryButton isDisabled={true} onClick={onClick}>
                            編集
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                        </SecondaryButton>
                    </li>
                </ul>
            </section>
            <section className={styles.section}>
                <h1 className={styles.title}>Tertiary Button</h1>
                <ul className={styles.buttonList}>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン（type=button）
                        </h2>
                        <TertiaryButton onClick={onClick}>
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                            編集
                        </TertiaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン_高さ指定あり100px（type=button）
                        </h2>
                        <div style={{ height: "100px" }}>
                            <TertiaryButton onClick={onClick}>
                                <FontAwesomeIcon
                                    icon={faPen}
                                    className={styles.icon}
                                />
                                編集
                            </TertiaryButton>
                        </div>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン（type=submit）
                        </h2>
                        <TertiaryButton
                            onClick={onClick}
                            type={ButtonTypes.SUBMIT}
                        >
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                            編集
                        </TertiaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン_非活性（type=submit）
                        </h2>
                        <TertiaryButton
                            isDisabled={true}
                            onClick={onClick}
                            type={ButtonTypes.SUBMIT}
                        >
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                            編集
                        </TertiaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            ボタン_ローディング（type=submit）
                        </h2>
                        <TertiaryButton
                            isLoading={true}
                            onClick={onClick}
                            type={ButtonTypes.SUBMIT}
                        >
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                            編集
                        </TertiaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            リンク（target=_blank）
                        </h2>
                        <TertiaryButton onClick={onClick}>
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                            編集
                        </TertiaryButton>
                    </li>
                    <li className={styles.buttonItem}>
                        <h2 className={styles.subTitle}>
                            リンク_非活性（target=_blank）
                        </h2>
                        <TertiaryButton isDisabled={true} onClick={onClick}>
                            <FontAwesomeIcon
                                icon={faPen}
                                className={styles.icon}
                            />
                            編集
                        </TertiaryButton>
                    </li>
                </ul>
            </section>
        </main>
    )
}
