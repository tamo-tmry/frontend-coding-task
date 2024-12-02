import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import { afterEach, describe, expect, it, test, vi } from "vitest"
import { TertiaryButton } from "./component"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

afterEach(cleanup)

describe("TertiaryButton", () => {
    test("hrefとtargetが指定されている場合、aタグのリンクが表示されること", () => {
        render(
            <TertiaryButton href="https://example.com" target="_blank">
                <FontAwesomeIcon icon={faPen} />
                編集
            </TertiaryButton>,
        )

        const link = screen.getByRole("link", { name: "編集" })
        expect(link).toBeDefined()
        expect(link.getAttribute("href")).toBe("https://example.com")
        expect(link.getAttribute("target")).toBe("_blank")
    })

    test("hrefが指定されていない場合、buttonタグが表示されること", () => {
        render(
            <TertiaryButton onClick={() => {}}>
                <FontAwesomeIcon icon={faPen} />
                編集
            </TertiaryButton>,
        )

        const button = screen.getByRole("button", { name: "編集" })
        expect(button).toBeDefined()
        expect(button.getAttribute("type")).toBe("button")
    })

    test("isDisabledがtrueの場合、ボタンが非活性で表示されること", () => {
        render(
            <TertiaryButton onClick={() => {}} isDisabled={true}>
                <FontAwesomeIcon icon={faPen} />
                編集
            </TertiaryButton>,
        )

        const button = screen.getByRole("button", { name: "編集" })
        expect(button).toBeDefined()
        expect(button.getAttribute("disabled")).toBe("")
    })

    test("isLoadingがtrueの場合、ローディングアイコンが表示され、子要素が表示されないこと", () => {
        render(
            <TertiaryButton isLoading={true} onClick={() => {}}>
                <FontAwesomeIcon icon={faPen} />
                編集
            </TertiaryButton>,
        )

        const loadingIcon = screen.getByTestId("loading-icon")
        expect(loadingIcon).toBeDefined()
        expect(screen.queryByText("編集")).toBeNull()
    })

    describe("ボタン押下時", () => {
        test("onClickが呼び出されること", () => {
            const onClickMock = vi.fn()
            render(
                <TertiaryButton onClick={onClickMock}>
                    <FontAwesomeIcon icon={faPen} />
                    編集
                </TertiaryButton>,
            )

            const button = screen.getByRole("button", { name: "編集" })
            fireEvent.click(button)

            expect(onClickMock).toHaveBeenCalledTimes(1)
        })

        test("isDisabledがtrueの場合、onClickが呼び出されないこと", () => {
            const onClickMock = vi.fn()
            render(
                <TertiaryButton onClick={onClickMock} isDisabled={true}>
                    <FontAwesomeIcon icon={faPen} />
                    編集
                </TertiaryButton>,
            )

            const disabledButton = screen.getByRole("button", { name: "編集" })
            fireEvent.click(disabledButton)
            expect(onClickMock).not.toHaveBeenCalled()
        })

        test("isLoadingがtrueの場合、onClickが呼び出されないこと", () => {
            const onClickMock = vi.fn()
            render(
                <TertiaryButton onClick={onClickMock} isLoading={true}>
                    <FontAwesomeIcon icon={faPen} />
                    編集
                </TertiaryButton>,
            )

            const loadingButton = screen.getByRole("button")
            fireEvent.click(loadingButton)
            expect(onClickMock).not.toHaveBeenCalled()
        })
    })
})
