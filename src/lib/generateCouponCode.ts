export const generateCouponCode = (title, expiryDate) => {

    const formattedTitle =  title.toUpperCase().replace(/\s+/g, "")

    const formattedExpireDate = expiryDate
        .split("-")
        .reverse()
        .join("")

    const couponCode = `${formattedTitle} - ${formattedExpireDate}`;

    return couponCode;
}