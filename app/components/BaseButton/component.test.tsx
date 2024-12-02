import { afterEach, describe, expect, test, vi } from "vitest"
import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import { BaseButton } from "./component"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

afterEach(cleanup)

describe("BaseButton", () => {
    test("hrefとtargetが指定されている場合、aタグのリンクが表示されること", () => {
        render(
            <BaseButton href="https://example.com" target="_blank">
                <FontAwesomeIcon icon={faPen} />
                編集
            </BaseButton>,
        )

        const link = screen.getByRole("link", { name: "編集" })
        expect(link).toBeDefined()
        expect(link.getAttribute("href")).toBe("https://example.com")
        expect(link.getAttribute("target")).toBe("_blank")
    })

    test("hrefとtargetが指定されていない場合、buttonタグが表示されること", () => {
        render(
            <BaseButton>
                <FontAwesomeIcon icon={faPen} />
                編集
            </BaseButton>,
        )

        const button = screen.getByRole("button", { name: "編集" })
        expect(button).toBeDefined()
        expect(button.getAttribute("type")).toBe("button")
    })

    test("isDisabledがtrueの場合、ボタンが非活性で表示されること", () => {
        render(
            <BaseButton isDisabled={true}>
                <FontAwesomeIcon icon={faPen} />
                編集
            </BaseButton>,
        )

        const button = screen.getByRole("button", { name: "編集" })
        expect(button.getAttribute("disabled")).toBe("")
    })

    test("isLoadingがtrueの場合、ローディングアイコンが表示され、子要素が表示されないこと", () => {
        render(
            <BaseButton isLoading={true} type="button">
                <FontAwesomeIcon icon={faPen} />
                編集
            </BaseButton>,
        )

        const loadingIcon = screen.getByTestId("loading-icon")
        expect(loadingIcon).toBeDefined()

        expect(screen.queryByText("編集")).toBeNull()
    })

    describe("ボタン押下時", () => {
        test("onClickが呼び出されること", () => {
            const onClickMock = vi.fn()
            render(
                <BaseButton onClick={onClickMock}>
                    <FontAwesomeIcon icon={faPen} />
                    編集
                </BaseButton>,
            )

            const button = screen.getByRole("button", { name: "編集" })
            fireEvent.click(button)

            expect(onClickMock).toHaveBeenCalledTimes(1)
        })

        test("isDisabledがtrueの場合、onClickが呼び出されないこと", () => {
            const onClickMock = vi.fn()

            render(
                <BaseButton isDisabled={true} onClick={onClickMock}>
                    <FontAwesomeIcon icon={faPen} />
                    編集
                </BaseButton>,
            )
            const disabledButton = screen.getByRole("button", { name: "編集" })
            fireEvent.click(disabledButton)
            expect(onClickMock).not.toHaveBeenCalled()
        })

        test("isLoadingがtrueの場合、onClickが呼び出されないこと", () => {
            const onClickMock = vi.fn()

            render(
                <BaseButton isLoading={true} onClick={onClickMock}>
                    <FontAwesomeIcon icon={faPen} />
                    編集
                </BaseButton>,
            )
            const loadingButton = screen.getByRole("button")
            fireEvent.click(loadingButton)
            expect(onClickMock).not.toHaveBeenCalled()
        })
    })
})
